import { pipeline } from "@xenova/transformers";

export async function POST(req: Request, res: Response){
    const {question} = await req.json();

    const model = "Xenova/all-MiniLM-L6-v2"
    const featureExctractor = await pipeline("feature-extraction", model)

    const response = await featureExctractor(question, { pooling: 'mean', normalize: true });
    const embedding = Array.from(response.data);

    console.log(question)
    return new Response(JSON.stringify(embedding), {status: 200});
}