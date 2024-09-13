//object destructing

const band={
    bandname:"led zepplin",
    famoussong:"stairway to heaven",
    year:1968,
    anotherfamoussong:"kashmir",
    };

    let { bandname, famoussong, ...restProps}=band;
    console.log(bandname);
    console.log(restProps);
    console.log(band);
    

