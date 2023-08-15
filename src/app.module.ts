import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { VenueModule } from './venue/venue.module';
import { SeatModule } from './seat/seat.module';
import { SeatTypeModule } from './seat-type/seat-type.module';
import { VenuePhotoModule } from './venue-photo/venue-photo.module';
import { RegionModule } from './region/region.module';
import { DistrictModule } from './district/district.module';
import { CustomerModule } from './customer/customer.module';
import { GenderModule } from './gender/gender.module';
import { LangModule } from './lang/lang.module';
import { CustomerAddressModule } from './customer_address/customer_address.module';
import { CountryModule } from './country/country.module';
import { Venue } from './venue/models/venue.model';
import { Seat } from './seat/models/seat.model';
import { SeatType } from './seat-type/models/seat-type.model';
import { VenuePhoto } from './venue-photo/models/venue-photo.model';
import { Region } from './region/models/region.model';
import { District } from './district/models/district.model';
import { Customer } from './customer/models/customer.model';
import { Gender } from './gender/models/gender.model';
import { Lang } from './lang/models/lang.model';
import { CustomerAddress } from './customer_address/models/customer_address.models';
import { Country } from './country/models/country.model';
import { CustomerCardModule } from './customer_card/customer_card.module';
import { VenueTypeModule } from './venue_type/venue_type.module';
import { VenueType } from './venue_type/models/venue_type.model';
import { CustomerCard } from './customer_card/models/customer_card.model';
import { HumanCategoryModule } from './human_category/human_category.module';
import { HumanCategory } from './human_category/models/human_category.model';
import { EventTypeModule } from './event_type/event_type.module';
import { EventModule } from './event/event.module';
import { EventType } from './event_type/models/event_type.model';
import { Event } from './event/models/event.model';
import { TicketModule } from './ticket/ticket.module';
import { CurrencyModule } from './currency/currency.module';
import { Ticket } from './ticket/models/ticket.model';
import { Currency } from './currency/models/currency.model';
import { StatusModule } from './status/status.module';
import { Status } from './status/models/status.model';
import { TicketTypeModule } from './ticket_type/ticket_type.module';
import { TicketType } from './ticket_type/models/ticket_type.model';
import { ColorModule } from './color/color.module';
import { Color } from './color/models/color.model';
import { CartModule } from './cart/cart.module';
import { Cart } from './cart/models/cart.model';
import { BookingModule } from './booking/booking.module';
import { Booking } from './booking/models/booking.model';
import { StatusCartModule } from './status_cart/status_cart.module';
import { StatusCart } from './status_cart/models/status_cart.model';
import { PaymentMethodModule } from './payment_method/payment_method.module';
import { PaymentMethod } from './payment_method/models/payment_method.model';
import { DeliveryMethodModule } from './delivery_method/delivery_method.module';
import { DeliveryMethod } from './delivery_method/models/delivery_method.model';
import { DiscountCouponModule } from './discount_coupon/discount_coupon.module';
import { DiscountCoupon } from './discount_coupon/models/discount_coupon.model';
import { StatusBookingModule } from './status_booking/status_booking.module';
import { StatusBooking } from './status_booking/models/status_booking.model';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: ".env", isGlobal: true}),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        Venue, 
        Seat,
        SeatType,
        VenuePhoto,
        Region,
        District,
        Customer,
        Gender,
        Lang,
        CustomerAddress,
        Country,
        CustomerCard,
        VenueType,
        HumanCategory,
        EventType,
        Event, 
        Ticket, 
        Currency, 
        Status, 
        TicketType, 
        Color, 
        Cart,
        Booking,
        StatusCart,
        PaymentMethod,
        DeliveryMethod,
        DiscountCoupon,
        StatusBooking
      ],
      autoLoadModels: true,
      logging: false
    }),
    VenueModule,
    SeatModule,
    SeatTypeModule,
    VenuePhotoModule,
    RegionModule,
    DistrictModule,
    CustomerModule,
    GenderModule,
    LangModule,
    CustomerAddressModule,
    CountryModule,
    CustomerCardModule,
    VenueTypeModule,
    HumanCategoryModule,
    EventTypeModule,
    EventModule,
    TicketModule,
    CurrencyModule,
    StatusModule,
    TicketTypeModule,
    ColorModule,
    CartModule,
    BookingModule,
    StatusCartModule,
    PaymentMethodModule,
    DeliveryMethodModule,
    DiscountCouponModule,
    StatusBookingModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
