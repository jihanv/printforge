import ModelsGrid from "@/app/components/ModelsGrid"
import type { ModelsPageProps } from "@/app/types"
import { getModels } from "@/app/lib/models"

export default async function Page({ searchParams }: ModelsPageProps) {
    const models = await getModels()
    const query = (await searchParams)?.q
    const filteredModels = query ?
        models.filter(obj => obj.name.toLowerCase().includes(query.toLowerCase())) :
        models

    return (
        <>
            <form>
                <label>Search:
                    <input type="text" name="q" />
                </label>
            </form>
            <ModelsGrid title="3D Models" models={filteredModels} />
        </>
    )
}
