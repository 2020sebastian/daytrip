
export default function BlogPost({title, coverPhoto, slug}){
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