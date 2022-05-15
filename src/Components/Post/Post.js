import { useRef } from "react";
import clsx from "clsx";
import useLazyLoad from "../../Reducers/useLazyLoad";
//import CardView from '../Card/Card';
import posts from '../../Data/data.json';
import Grid from '@mui/material/Grid';
import React, { lazy } from 'react';
//import Posts from "./Components/Post/Post"
const CardView = lazy(() => import('../Card/Card'));
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
            <Grid container spacing={4}
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                style={{ minHeight: '80vh' }}
            >
                {
                    data.map(c => (
                        <Grid item xs={3} sm={6} md={4} >
                            <CardView owner={c["owner"]} imageUrl={c["imageUrl"]} />

                        </Grid>
                    ))
                }

            </Grid>



            <div ref={triggerRef} className={clsx("trigger", { visible: loading })}>
                <div style={{ textAlign: "center" }}>
                    Loading...
                </div>
            </div>
        </>
    );
}

export default Posts;