// This is the main file for the Data.

import { useRef } from "react";
import clsx from "clsx";
import useLazyLoad from "../../Reducers/useLazyLoad";
// eslint-disable-next-line
import { withStyles } from '@material-ui/core/styles'
import Typography from '@mui/material/Typography';
import datapage1 from "../../Data/CONTENTLISTINGPAGE-PAGE1.json"
import datapage2 from "../../Data/CONTENTLISTINGPAGE-PAGE2.json"
import datapage3 from "../../Data/CONTENTLISTINGPAGE-PAGE3.json"

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { makeStyles } from "@material-ui/core/styles";
import MovieServices from "../../MovieServices/MovieServices"
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";

import IconButton from "@material-ui/core/IconButton";

import SearchIcon from "@material-ui/icons/Search";


import { useSelector, useDispatch } from 'react-redux';

// eslint-disable-next-line
import React, { lazy, useEffect } from 'react';
//styles for the paper and the inputbase
const useStyles = makeStyles(theme => ({
    root: {
        overflow: "hidden",
        justifyContent: "center",
        textAlign: "center",
        marginLeft: 20,
        marginTop: 0,
        backgroundColor: "#464b52",
        padding: "1px 15px",
        display: "flex",
        alignItems: "center",
    },
    focused: {
        backgroundColor: "White",
        borderColor: "2px solid green",
        borderWidth: 10
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1
    },
    iconfocus: {
        color: "black"
    },
    iconButton: {
        padding: 10
    },

}));
// this is for number of data load at a time and pages 
const NUM_PER_PAGE = 20;
const TOTAL_PAGES = 4;
let dataFullData = [];
// dummy thing to load the data from json file
const dataLoadInitial = () => {
    const data1page = datapage1.page["content-items"].content;
    const data2page = datapage2.page["content-items"].content;
    const data3page = datapage3.page["content-items"].content;
    dataFullData = [...data1page, ...data2page, ...data3page]
}


let countPage = 1;
const Posts = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dataLoadInitial();
        // MovieServices.loadFullData(dispatch);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [width, setWidth] = React.useState(window.innerWidth);
    // eslint-disable-next-line
    const [height, setHeight] = React.useState(window.innerHeight);
    const moviesSearch = useSelector((state) => state.searchlist);
    const storeDataSaved = useSelector((state) => state);
    const [value, setValue] = React.useState()
    const [search, setSearch] = React.useState(false)
    const classes = useStyles();
    const triggerRef = useRef(null);
    // search by key method
    const searchBykey = async () => {
        let dataSearch = value.trim().length > 0 ? true : false;
        if (dataSearch) {
            setSearch(true)
        }
        else {
            setSearch(false)
        }
        await MovieServices.loadData(dispatch, value);

    }
    // this is for dimension update
    const updateDimensions = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);

    }, []);


    const onChange = (event) => {

        setValue(event.target.value);

    };
    // this ongrabdata will load depends on page number, for api/ pagination we can write the logic to append the data
    const onGrabData = (currentPage) => {
        countPage++;

        if (currentPage <= 4) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const data = dataFullData.slice(
                        ((currentPage - 1) % TOTAL_PAGES) * NUM_PER_PAGE,
                        NUM_PER_PAGE * (currentPage % TOTAL_PAGES)
                    );
                    dispatch({
                        type: 'GET_DATA_UPDATE',
                        payload: data
                    })
                    resolve(data);
                }, 3000);

            });
        }
        else {
            return new Promise((resolve) => {
                setTimeout(() => {
                    if (currentPage <= 4) {
                        const data = dataFullData.slice(
                            ((currentPage - 1) % TOTAL_PAGES) * NUM_PER_PAGE,
                            NUM_PER_PAGE * (currentPage % TOTAL_PAGES)
                        );
                        resolve(data);
                        dispatch({
                            type: 'GET_DATA_UPDATE',
                            payload: data
                        })
                    }
                    else {
                        resolve(null);
                    }
                }, 3000);
            })
        }
    };
    // eslint-disable-next-line 
    const { data, loading } = useLazyLoad({ triggerRef, onGrabData });

    return (
        <>
            <div style={{ backgroundColor: 'black', minHeight: 900 }}>
                <div style={{ width: width - 20, textAlign: "center" }}>
                    <Paper component="form" className={classes.root} >

                        <InputBase
                            classes={{ root: classes.root, focused: classes.focused }}
                            placeholder="Search Movies"
                            inputProps={{ "aria-label": "search" }}
                            onChange={onChange}

                        />
                        <IconButton
                            onClick={
                                searchBykey}
                            className={classes.iconButton}
                            aria-label="search"
                        >
                            <SearchIcon style={{ color: "white" }}
                            />
                        </IconButton>

                    </Paper>
                </div>

                {!search && <div style={{ padding: 20 }}>
                    <ImageList sx={{ width: "100%", height: "100%" }} cols={3} rowHeight={190} >
                        {storeDataSaved?.data?.data?.map((item, i) => (

                            <ImageListItem key={item.id}>
                                <img
                                    style={{ width: 100, height: 120, objectFit: "fill" }}
                                    //src={'../../images/poster1.jpg'}
                                    src={item.posterimage}

                                    alt={item.name}

                                />
                                <div style={{ justifyContent: "center", alignItems: "center", height: 30 }}>
                                    <Typography style={{
                                        color: "#FFFFFF", alignItems: "flex-start", fontSize: 10, overflow: "hidden"
                                    }}>
                                        {item.name}
                                    </Typography>

                                </div>
                            </ImageListItem>
                        ))}
                    </ImageList></div>}
                {search &&
                    <div style={{ padding: 20 }}>
                        {moviesSearch.searchItem.length > 0 &&
                            <ImageList sx={{ width: "100%", height: "100%" }} cols={3} rowHeight={164} >
                                {moviesSearch.searchItem.map((item, i) => (

                                    <ImageListItem key={item.id}>
                                        <img
                                            style={{ width: 100, height: 120, objectFit: "fill" }}

                                            src={item.posterimage}
                                            alt={item.name}
                                        />
                                        <div style={{ justifyContent: "center", alignItems: "center", height: 30 }}>
                                            <Typography style={{
                                                color: "#FFFFFF", alignItems: "flex-start", fontSize: 10, overflow: "hidden"
                                            }}>
                                                {item.name}
                                            </Typography>
                                        </div>
                                    </ImageListItem>
                                ))}
                            </ImageList>}
                        {moviesSearch.searchItem.length === 0 &&
                            <div style={{ textAlign: "center" }}>
                                <p style={{ color: "white" }}>    No movie with this name.</p>
                            </div>
                        }
                    </div>
                }
                {countPage <= 4 && !search &&
                    <div ref={triggerRef} className={clsx("trigger", { visible: loading })}>
                        {loading && <div style={{ textAlign: "center" }}>
                            <p style={{ color: "white" }}> Loading...</p>
                        </div>}
                    </div>

                }
                {countPage > 4 && !search &&
                    <div >
                        <div style={{ textAlign: "center" }}>
                            <p style={{ color: "white" }}>   No More Data...</p>
                        </div>
                    </div>
                }
            </div>
        </>
    );
}


export default Posts;