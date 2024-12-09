import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                <Skill iconId={'code'}
                       title={'html5'}
                       description={'dfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfgh'}/>
                <Skill iconId={'css'}
                       title={'css3'}
                       description={'dfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfgh'}/>
                <Skill iconId={'figma'}
                       title={'web design'}
                       description={'dfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfgh'}/>
                <Skill iconId={'ts'}
                       title={'typescript'}
                       description={'dfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfgh'}/>
                <Skill iconId={'react'}
                       title={'react'}
                       description={'dfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfgh'}/>
                <Skill iconId={'styled'}
                       title={'styled components'}
                       description={'dfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfghdfghfgh'}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    min-height: 100vh;
    background-color: cyan;
`



