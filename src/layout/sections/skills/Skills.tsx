import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./Skill/Skill";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                    <Skill iconId={'code'}
                           title={'html5'}
                           description={'dfghfghdfghfg hdfghfghdfghfghdfghfghdf ghfghdfghfghdfghfghdf ghfghdfghfghdfghfghdfghfgh dfghfghdfghfghdfghfgh'}/>
                    <Skill iconId={'css'}
                           title={'css3'}
                           description={'dfghfghdfghfg hdfghfghdfg hfghdfghfghdfghf ghdfghfghdfghfg hdfghfghdfghfghdfgh fghdfghfghdfghfghdf ghfghdfghfgh'}/>
                    <Skill iconId={'figma'}
                           title={'web design'}
                           description={'dfghfghdfghfg hdfghfghdfghfghdfghfg hdfghfghdfghfghdf ghfghdfghfghdfghfgh dfghfghdfghfghdfghfghdfg hfghdfghfgh'}/>
                    <Skill iconId={'ts'}
                           title={'typescript'}
                           description={'dfghfghd fghfghdfghfghdfghfghdfghf ghdfghfghdfghf ghdfghfghdfghfghdfghf ghdfghfghdfghfghdfgh fghdfghfghdfghfgh'}/>
                    <Skill iconId={'react'}
                           title={'react'}
                           description={'dfghfghdfghfghdfg hfghdfghfghdfgh fghdfghfghdfghf ghdfghfghdfghfgh dfghfghdfghfghd fghfghdfghfghdfghfghd fghfgh'}/>
                    <Skill iconId={'styled'}
                           title={'styled components'}
                           description={'dfghfghdfghfghdfg hfghdfghfghdfghfghd fghfghdfghfgh dfghfghdfghfghdf ghfghdfghfghdf ghfghdfghfghdfghf ghdfghfgh'}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
`



