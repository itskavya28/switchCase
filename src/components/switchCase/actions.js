import React from "react";

const SWITCH_CASE = 'SWITCH_CASE';

export function switchCase(value){
    return {
        type: SWITCH_CASE, value: value
    }
}