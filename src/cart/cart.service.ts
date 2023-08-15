import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Cart } from './models/cart.model';

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart) private readonly cartRepo: typeof Cart) { }

  async create(createCartDto: CreateCartDto) {  
    let res = this.cartRepo.create(createCartDto)
    console.log(await res)
    
    const date = new Date()
    let addedAt = String(date).split(" ")[4]
    date.setTime(date.getTime() + 15 * 60 * 1000)
    let finishesAt = String(date).split(" ")[4]

    console.log(addedAt, finishesAt);
    

    let update = this.cartRepo.update({addedAt, finishesAt, status_id: 1}, {where: {id: (await res).dataValues.id}})

    return update;



  }

  findAll() {
    return this.cartRepo.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.cartRepo.findByPk(id, { include: { all: true } });
  }

  update(id: number, updateCartDto: UpdateCartDto) {
    return this.cartRepo.update(updateCartDto, { where: { id }, returning: true });
  }

  remove(id: number) {
    return this.cartRepo.destroy({ where: { id } });
  }
}
