import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
  Res,
  Inject,
} from '@nestjs/common';
import { CreateClientDTO } from './dto';
import { Response } from 'express';
import { UserStore } from 'src/store/users.store';
let CLIENT = [];

@Controller('/client')
export class ClientController {
  //injecting UserStore here
  constructor(@Inject(UserStore) private store: any) {
    console.log(this.store);
  }

  @Post('/add')
  addClient(@Body() createClientDTO: CreateClientDTO) {
    CLIENT.push(createClientDTO);
    return 'User added';
  }

  @Get('/get_all')
  getClient() {
    return { res: CLIENT };
  }

  @Get('/get_by_id/:id')
  getClientById(@Param('id') id: number) {
    return CLIENT.find((client) => client.id === +id);
  }

  @Put('/update/:id')
  updateById(
    @Param('id') id: number,
    @Body() updateClientDTO: CreateClientDTO,
    @Res() res: Response,
  ) {
    const clientIdx = CLIENT.findIndex((client) => client.id === +id);

    // Handle Client Not Found
    if (clientIdx === -1) {
      return res.status(404).send({ msg: 'Client not found' });
    }

    // Update fields
    const clientToUpdate = CLIENT[clientIdx];
    if (updateClientDTO.name) {
      clientToUpdate.name = updateClientDTO.name;
    }
    if (updateClientDTO.age) {
      clientToUpdate.age = updateClientDTO.age;
    }

    // Update the client in the array
    CLIENT[clientIdx] = clientToUpdate;

    // Send success response
    return res.status(200).send({ res: clientToUpdate });
  }

  @Delete('/delete/:id')
  deleteClient(@Param('id') id: number, @Res() res: Response) {
    const clientIdx = CLIENT.findIndex((client) => client.id === +id);

    if (clientIdx === -1) {
      return res.status(404).send({ msg: 'Client not found' });
    }

    try {
      const deletedClient = CLIENT[clientIdx];
      CLIENT = CLIENT.filter((client) => client.id !== +id);

      res.status(200).send({ msg: 'User Deleted', userDeleted: deletedClient });
    } catch (error) {
      return res.status(500).send({ err: error.message });
    }
  }
}
