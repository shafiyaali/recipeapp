import {GoogleGenAI} from "@google/genai"


const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_AI_KEY
})

console.log("SHAF",process.env.GEMINI_AI_KEY);

export async function POST(req) {
    try {
        const { ingredients } = await req.json();

        const prompt = ` Generate a recipe using these ingredients. Dont need use all of the ingredients or you can add some ingredients as well but not so many ingredients. List of available ingredients are : ${ingredients}
        Return ONLY valid JSON: 
        {
  "title":"",
  "description":"",
  "ingredients":[],
  "instructions":[],
}
  IMPORTANT:
Return ONLY raw JSON.
Do NOT wrap the response in markdown.
Do NOT use \`\`\`json.
Do NOT add explanations.
        `;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,

        });

        const recipe = JSON.parse(response.text)
        return Response.json(recipe)

    } catch (e)
    {
        return Response.json(
            {error: e.message },{
            status: 500
        }
        )
    }
}