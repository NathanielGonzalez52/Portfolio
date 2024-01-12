"use client";

import "./welcome.css"
import React, { useState, useEffect } from 'react';
import Type from "./typing";

export default function welcome() {

  return (
    <div className="landing">
      <Type/>
    </div>
  )
}
