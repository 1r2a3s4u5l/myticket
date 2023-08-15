import { Injectable } from '@nestjs/common';
import { CreateDiscountCouponDto } from './dto/create-discount_coupon.dto';
import { UpdateDiscountCouponDto } from './dto/update-discount_coupon.dto';
import { InjectModel } from '@nestjs/sequelize';
import { DiscountCoupon } from './models/discount_coupon.model';

@Injectable()
export class DiscountCouponService {
  constructor(@InjectModel(DiscountCoupon) private readonly discountCouponRepo: typeof DiscountCoupon) {}

  create(createDiscountCouponDto: CreateDiscountCouponDto) {
    return this.discountCouponRepo.create(createDiscountCouponDto);
  }

  findAll() {
    return this.discountCouponRepo.findAll({include: {all: true}});
  }

  findOne(id: number) {
    return this.discountCouponRepo.findByPk(id, {include: {all: true}});
  }

  update(id: number, updateDiscountCouponDto: UpdateDiscountCouponDto) {
    return this.discountCouponRepo.update(updateDiscountCouponDto, {where: {id}, returning: true});
  }

  remove(id: number) {
    return this.discountCouponRepo.destroy({where: {id}});
  }
}
