import React, { useEffect, useState } from "react";
import useGit from "../../hooks/githooks";
import RepositoryItem from "../repository-item";
import * as S from "./styled";

const Repositories = () => {
    const { gitState, getUserRepos, getUserStarred } = useGit();
    const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState(false)
    useEffect(() => {
        if (gitState.user.login) {
            getUserRepos(gitState.user.login);
            getUserStarred(gitState.user.login);
        }
        setHasUserForSearchrepos(gitState.repositories);
    }, [gitState.user.login]);


  return (
      <>
      {hasUserForSearchrepos ? (
    <S.WrapperTabs 
    selectedTabClassName="is-selected"
    selectedTabPanelClassName="is-selected">

        <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
        </S.WrapperTabList>
        <S.WrapperTabPanel>
            <S.WrapperList>
                {gitState.repositories.map((item) => (
                <RepositoryItem 
                    key={item.id}
                    name={item.name} 
                    linkToRepo={item.html_name} 
                    fullName={item.full_name} />
                ))}
                </S.WrapperList>
        </S.WrapperTabPanel>
        <S.WrapperTabPanel>
        <S.WrapperList>
        {gitState.starred.map((item) => (
                <RepositoryItem 
                    key={item.id}
                    name={item.name} 
                    linkToRepo={item.html_name} 
                    fullName={item.full_name} />
                ))}
                </S.WrapperList>
        </S.WrapperTabPanel>
    </S.WrapperTabs>
     ) : (
     <></>  
        )}
     </>
    );
};

export default Repositories;
