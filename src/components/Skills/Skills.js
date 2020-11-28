/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import ColoredLine from "../common/Line";
import { TitleBox } from "../common/TitleBox";
import SkillSet from "./SkillSet";

const useStyles = makeStyles({
  title: {
    fontSize: "1.5em",
  },
});

// key -> category, value -> name
const sortByKey = (array, key, value) => {
  const res = {};
  array.forEach((obj) => {
    if (!(obj[key] in res)) {
      res[obj[key]] = [obj[value]];
    } else {
      res[obj[key]].push(obj[value]);
    }
  });
  return res;
};

function Skills() {
  const classes = useStyles();
  const skills = sortByKey(
    useSelector((state) => state.skillInfo),
    "category",
    "name"
  );

  return (
    <TitleBox flexDirection="column">
      <Typography
        color="primary"
        variant="h1"
        id="title"
        className={classes.title}
      >
        Skills
      </Typography>
      <ColoredLine opacity={0.5} />
      {console.log(skills)}
      {Object.keys(skills).map((item) => (
        <SkillSet skillList={skills[item]} title={item} />
      ))}
    </TitleBox>
  );
}

export default Skills;
