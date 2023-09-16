import { fastify } from 'fastify'
import { prisma } from './lib/prisma'
import { getAllPromptsRoute } from './routes/get-all-prompts';
import { uploadVideoRoute } from './routes/upload.video';
import { createTranscription } from './routes/create.trasncription';

const app = fastify()

app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);
app.register(createTranscription);

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP SERVER RUNNING');
})