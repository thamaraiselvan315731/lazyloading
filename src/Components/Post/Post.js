import { useRef } from "react";
import clsx from "clsx";
import useLazyLoad from "../../Reducers/useLazyLoad";
import CardView from '../Card/Card';
import { LoadingPosts } from './LoadingPosts';
import posts from '../../Data/data.json';

const NUM_PER_PAGE = 6;
const TOTAL_PAGES = 3;

const Posts = () => {
    const images = posts["data"];
    const triggerRef = useRef(null);
    const onGrabData = (currentPage) => {
        // This would be where you'll call your API
        return new Promise((resolve) => {
            setTimeout(() => {
                const data = images.slice(
                    ((currentPage - 1) % TOTAL_PAGES) * NUM_PER_PAGE,
                    NUM_PER_PAGE * (currentPage % TOTAL_PAGES)
                );
                console.log(data);
                resolve(data);
            }, 3000);
        });
    };
    const { data, loading } = useLazyLoad({ triggerRef, onGrabData });
    return (
        <>
            <div >
                {data.map(image => {
                    return <CardView owner={image["owner"]} imageUrl={image["imageUrl"]} />
                })}
            </div>
            <div ref={triggerRef} className={clsx("trigger", { visible: loading })}>
                Loading...
            </div>
        </>
    );
}

export default Posts;