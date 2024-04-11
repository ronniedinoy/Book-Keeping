import { PrismaClient } from "@prisma/client";
import { useRouter } from "next/router";
import { NextResponse } from "next/server";
import { useState } from "react";

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

export const POST = async (request: Request) => {
  const requestData = await request.json();

  try {
    const query = await prisma.login.findFirstOrThrow({
      where: {
        AND: [
          { password: requestData.password },
          {
            OR: [
              { username: { equals: requestData.username } },
              { email: { equals: requestData.username } },
            ],
          },
        ],
      },
    });
    if (
      (requestData.username === query.username || requestData.email) &&
      requestData.password === query.password
    ) {
      const responseData = { ...query, password: null, confirm_password: null };
      console.log("Welcome", responseData.username, responseData.email);
      return new NextResponse(JSON.stringify(responseData), { status: 200 });
    }
  } catch (error) {
    console.log("Record not Exist");
    return new NextResponse("Not Found", { status: 404 });
  }
};
