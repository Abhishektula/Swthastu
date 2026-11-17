declare module '*.open-next/worker.js' {
  const handler: {
    fetch(request:Request,env:Cloudflare.Env,ctx:ExecutionContext):Promise<Response>;
  };
  export default handler;
}
