
export default function BlogPost({title, coverPhoto, slug}){
    // console.log("title: " + title)
    // console.log("coverPhoto: " + coverPhoto)
    // console.log("slug: " + slug)
    return (
        <div>
            <div>
                <h2>{title}</h2>
                <div>
                    <div>
                    <h3>{slug}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}