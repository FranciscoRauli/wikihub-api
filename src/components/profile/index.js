import React from "react"
import useGit from "../../hooks/githooks";
import * as S from "./styled"

const Profile = () => {

    const { gitState } = useGit();
  

    return (
  <S.Wrapper>
          <S.WrapperImage src={gitState.user.avatar} alt="Avatar de usuário" />
        <S.WrapperInfos>
          <div>
                <h1>{gitState.user.name}</h1>
                <S.WrapperUserGeneric>
                <h3>Usuário: </h3>
                <a href={gitState.user.html_url}
                target="_blank" rel="noreferrer">
                    {gitState.user.login}</a>
                </S.WrapperUserGeneric>
                <S.WrapperUserGeneric>
                <h3>Companhia: </h3>
                <span>{gitState.user.company}</span>
                </S.WrapperUserGeneric>
                <S.WrapperUserGeneric>
                <h3>Localização: </h3>
                <span>{gitState.user.location}</span>
                </S.WrapperUserGeneric>
                <S.WrapperUserGeneric>
                <h3>Blog:</h3>
                <a href={gitState.user.Blog} target="_blank" rel= "noreferrer">
                {gitState.user.Blog} </a>
                </S.WrapperUserGeneric>
            </div>
      
        <S.WrapperStatusCount>
            <div>
                <h4>Followers</h4>
                <span>{gitState.user.followers}</span>
            </div>
            <div>
                <h4>Followings</h4>
                <span>{gitState.user.following}</span>
            </div>
            <div>
                <h4>Gists</h4>
                <span>{gitState.user.public_gists}</span>
            </div>
            <div>
                <h4>Repos</h4>
                <span>{gitState.user.public_repos}</span>
            </div>
            
        </S.WrapperStatusCount>
        </S.WrapperInfos>
    </S.Wrapper>
  );
};

export default Profile;