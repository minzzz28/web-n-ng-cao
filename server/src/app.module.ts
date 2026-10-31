import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { resolve } from 'node:path';
import { HealthController } from './health.controller';
import { DatabaseModule } from './database/database.module';
import { createTypeOrmOptions } from './database/typeorm.config';
import { AuthModule } from './modules/auth/auth.module';
import { UniversitiesModule } from './modules/universities/universities.module';
import { UsersModule } from './modules/users/users.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { FavoritesModule } from './modules/favorites/favorites.module';
import { RoomsModule } from './modules/rooms/rooms.module';
import { ReviewsModule } from './modules/reviews/reviews.module';
import { RoommatePostsModule } from './modules/roommate-posts/roommate-posts.module';
import { PropertiesModule } from './modules/properties/properties.module';
import { DashboardsModule } from './modules/dashboards/dashboards.module';
import { RoommatesModule } from './modules/roommates/roommates.module';
import { RoommateRequestsModule } from './modules/roommate-requests/roommate-requests.module';
import { ConversationsModule } from './modules/conversations/conversations.module';
import { GroupsModule } from './modules/groups/groups.module';
import { AppointmentsModule } from './modules/appointments/appointments.module';
import { ContractsModule } from './modules/contracts/contracts.module';
import { InvoicesModule } from './modules/invoices/invoices.module';
import { TenantsModule } from './modules/tenants/tenants.module';
import { ReportsModule } from './modules/reports/reports.module';
import { VerificationsModule } from './modules/verifications/verifications.module';
import { AdminModule } from './modules/admin/admin.module';
import { StudentProfileModule } from './modules/student-profile/student-profile.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // The existing project stores .env at the workspace root, while Nest
      // commands may run from either that root or the server workspace.
      envFilePath: [
        resolve(process.cwd(), '../.env'),
        resolve(process.cwd(), '.env'),
      ],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: createTypeOrmOptions,
    }),
    DatabaseModule,
    AuthModule,
    UsersModule,
    NotificationsModule,
    FavoritesModule,
    RoomsModule,
    ReviewsModule,
    RoommatePostsModule,
    PropertiesModule,
    DashboardsModule,
    UniversitiesModule,
    RoommatesModule,
    RoommateRequestsModule,
    ConversationsModule,
    GroupsModule,
    AppointmentsModule,
    ContractsModule,
    InvoicesModule,
    TenantsModule,
    ReportsModule,
    VerificationsModule,
    AdminModule,
    StudentProfileModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}
