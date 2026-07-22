import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export const dynamic = 'force-dynamic';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const orders = await prisma.order.findMany({
      orderBy: { createdAt: 'desc' },
      take: 20, // Fetch recent 20
      include: {
        items: true,
      }
    });

    return NextResponse.json({
      success: true,
      data: orders
    });
  } catch (error: any) {
    console.error('Failed to fetch admin orders:', error);
    
    // Graceful fallback for demo if DB is offline
    const mockOrders = [
      {
        id: 'mock-order-12345',
        status: 'PROCESSING',
        totalAmount: '850.00',
        paymentMethod: 'COD',
        paymentStatus: 'PENDING',
        createdAt: new Date().toISOString(),
        shippingAddr: JSON.stringify({ firstName: 'Rahul', lastName: 'Deshmukh', city: 'Pune' }),
        items: [
          { productId: '9', quantity: 1, price: '850' }
        ]
      },
      {
        id: 'mock-order-09876',
        status: 'SHIPPED',
        totalAmount: '450.00',
        paymentMethod: 'ONLINE',
        paymentStatus: 'PAID',
        createdAt: new Date(Date.now() - 86400000).toISOString(),
        shippingAddr: JSON.stringify({ firstName: 'Priya', lastName: 'Joshi', city: 'Mumbai' }),
        items: [
          { productId: '10', quantity: 1, price: '250' },
          { productId: '4', quantity: 1, price: '200' }
        ]
      },
      {
        id: 'mock-order-55443',
        status: 'DELIVERED',
        totalAmount: '120.00',
        paymentMethod: 'COD',
        paymentStatus: 'PAID',
        createdAt: new Date(Date.now() - 172800000).toISOString(),
        shippingAddr: JSON.stringify({ firstName: 'Sandeep', lastName: 'Targe', city: 'Nagpur' }),
        items: [
          { productId: '2', quantity: 1, price: '120' }
        ]
      }
    ];

    return NextResponse.json({
      success: true,
      isMockData: true,
      data: mockOrders
    });
  } finally {
    await prisma.$disconnect();
  }
}
