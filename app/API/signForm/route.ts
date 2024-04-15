import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function DELETE(request: Request) {
  const requestData = await request.json();
  console.log(requestData);

  const deleteInvoice = await prisma.login.delete({
    where: {
      id: requestData.id,
    },
  });

  if (deleteInvoice)
    return NextResponse.json({ messege: `Item ${requestData.id} is Deleted` });

  return NextResponse.json({ error: `Item ${requestData.id} was not Deleted` });
}

export async function PATCH(request: Request) {
  const requestData = await request.json();
  const newData = {
    username: requestData.username,
    email: requestData.email,
    password: requestData.password,
  };

  const responseData = await prisma.login.update({
    where: {
      id: requestData.id,
    },
    data: newData,
  });
  return NextResponse.json(responseData);
}

export async function GET(request: Request) {
  const result = await prisma.login.findFirst();
  console.log(result);
  return NextResponse.json(result);
}

export async function POST(request: Request) {
  const requestData = await request.json();
  try {
    const responseData = await prisma.login.create({
      data: requestData,
    });
    if (requestData !== responseData) {
      console.log("Registration Complete");
      return NextResponse.json(responseData);
    }
  } catch (error) {
    console.log("Username or email is use");
    return NextResponse.json(requestData);
  }
}
