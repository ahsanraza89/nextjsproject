"use client"
import { useSearchParams } from "next/navigation";
import Card from "@/components/cards/card";
import { ads } from "../data";
import { Suspense } from "react";

export default function(){
    <Suspense>
<Search></Search>
</Suspense>
}

export  function Search (){

    // URL
    // /search?name=ali&city=fsd&uni=gc

    // name,city aur uni waley query params ko pick krne 
    // keliye useSearchParams() use krna parega

    let params = useSearchParams();
    let searchText = params.get('q').toLowerCase();

    return <div style={{display:'flex', gap: '25px'}}>
{
    ads.filter(function(ad){
       if(ad.name.toLowerCase().includes(searchText)){
        return true;
       }
    }).map(function(ad){
         return <Card meraAd = {ad}></Card>
         
    })
    
    }

</div>
}