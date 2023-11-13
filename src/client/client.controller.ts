import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
  Res,
  // Inject,
  NotFoundException,
} from '@nestjs/common';
import { CreateClientDTO } from './dto';
import { Response } from 'express';
// import { UserStore } from 'src/store/users.store';
import { ApiTags } from '@nestjs/swagger';
import { ClientService } from './client.service';
// let CLIENT = [];
@ApiTags('Client')
@Controller('/client')
export class ClientController {
  //injecting UserStore here

  // constructor(@Inject(UserStore) private store: any) {
  //   console.log(this.store);
  // }

  constructor(private clientService: ClientService) {
    console.log(this.clientService);
  }

  @Post('/add')
  addClient(@Body() createClientDTO: CreateClientDTO) {
    // CLIENT.push(createClientDTO);
    this.clientService.addClient(createClientDTO);
    return { res: 'User added', user: createClientDTO };
  }

  @Get('/get_all')
  getAllClients() {
    const clients = this.clientService.getClients();
    return { res: clients };
  }

  @Get('/get_by_id/:id')
  getClientById(@Param('id') id: number, @Res() res: Response) {
    const clients = this.clientService.getClients();

    const clientIndex = clients.findIndex((client) => {
      return +client.id === +id;
    });

    if (clientIndex === -1) {
      throw new NotFoundException(`Client with ID ${id} not found`);
    }

    // return { res: CLIENT[clientIndex] }; => this is with hardcore logic

    return res.status(200).send({ Client: this.clientService.getClient(+id) }); //done with service
  }

  @Put('/update/:id')
  updateById(
    @Param('id') id: number,
    @Body() updateClientDTO: CreateClientDTO,
    @Res() res: Response,
  ) {
    // const clientIdx = CLIENT.findIndex((client) => +client.id === +id);
    // // Handle Client Not Found
    // // if (clientIdx === -1) {
    // //   return res.status(404).send({ msg: 'Client not found' });
    // // }

    // // Update fields
    // const clientToUpdate = CLIENT[clientIdx];
    // if (updateClientDTO.name) {
    //   clientToUpdate.name = updateClientDTO.name;
    // }
    // if (updateClientDTO.age) {
    //   clientToUpdate.age = updateClientDTO.age;
    // }

    // // Update the client in the array
    // CLIENT[clientIdx] = clientToUpdate;

    // Send success response
    // return res.status(200).send({ res: clientToUpdate });

    const UC = this.clientService.updateClient(+id, updateClientDTO);
    return res.status(200).send({ res: 'User Updated', UC });
  }

  @Delete('/delete/:id')
  deleteClient(@Param('id') id: number, @Res() res: Response) {
    // const clientIdx = CLIENT.findIndex((client) => client.id === +id);

    // if (clientIdx === -1) {
    //   return res.status(404).send({ msg: 'Client not found' });
    // }

    // try {
    //   const deletedClient = CLIENT[clientIdx];
    //   CLIENT = CLIENT.filter((client) => +client.id !== +id);

    //   res.status(200).send({ msg: 'User Deleted', userDeleted: deletedClient });
    // } catch (error) {
    //   return res.status(500).send({ err: error.message });
    // }
    const DC = this.clientService.deleteClient(+id);
    return res.status(200).send({ res: 'User Deleted', client: DC });
  }
}
