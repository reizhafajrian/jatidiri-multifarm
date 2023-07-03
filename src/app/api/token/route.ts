export async function GET(request: Request) {
  return new Response(request.headers.get("cookie")?.split("=")[1], {
    status: 200,
  })
}
