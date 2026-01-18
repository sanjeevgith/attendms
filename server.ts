import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import { getContext } from '@netlify/angular-runtime/context';

// Keep this minimal
const angularAppEngine = new AngularAppEngine();

export async function netlifyAppEngineHandler(request: Request): Promise<Response> {
  const context = getContext();
  
  try {
    const result = await angularAppEngine.handle(request, context);
    return result || new Response('Not found', { status: 404 });
  } catch (err) {
    console.error('SSR Error:', err);
    return new Response('Internal Server Error', { status: 500 });
  }
}

export const reqHandler = createRequestHandler(netlifyAppEngineHandler);