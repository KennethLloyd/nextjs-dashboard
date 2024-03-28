import { PrismaClient } from '@prisma/client';
import {
  users,
  customers,
  invoices,
  revenue,
} from '../app/lib/placeholder-data';

const prisma = new PrismaClient();

async function main() {
  await Promise.all([
    seedUsers(),
    seedCustomers(),
    seedInvoices(),
    seedRevenue(),
  ]);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

async function seedUsers() {
  await prisma.user.createMany({
    data: users,
    skipDuplicates: true,
  });
}

async function seedCustomers() {
  await prisma.customer.createMany({
    data: customers,
    skipDuplicates: true,
  });
}

async function seedInvoices() {
  await prisma.invoice.createMany({
    data: invoices,
    skipDuplicates: true,
  });
}

async function seedRevenue() {
  await prisma.revenue.createMany({
    data: revenue,
    skipDuplicates: true,
  });
}
