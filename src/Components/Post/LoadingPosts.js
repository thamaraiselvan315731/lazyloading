
import CardLoader from "../Card/CardLoader"


export const LoadingPosts = () => {
    const loadPages = [1, 2, 3, 4, 5, 6];
    return (
        <div>
            {loadPages.map(num => { return <CardLoader /> })}
        </div>
    );
}



