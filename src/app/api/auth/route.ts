import { prisma } from "../../../../../next-sweeper-scout/db.server";
export async function GET(request: Request) {
  return new Response("Yo yo yo");
}

export async function POST(request: Request) {
  const body = request.body;
  console.log("req body: ", body);

  const res = await prisma.user.create({
    data: {
      firstName: "Aaron",
      lastName: "mitchell",
      phoneNumber: "8325408313",
      street: "Bennet St",
      district: "Brighton/Allston",
      password: "testpass123",
    },
  });
  console.log("post res: ", res);

  return new Response("yoyoyo");
}
