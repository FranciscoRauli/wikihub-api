import React, { useState } from 'react';
import * as S from './styled';
import useGit from "../../hooks/githooks";

const Header = () => {

    const {getUser} = useGit();
    const [usernameForSearch, setusernameForSearch] = useState();

    const submitGetUser = () =>
    {
        if (!usernameForSearch) return;
        return getUser(usernameForSearch);
    };

  return (
    <header>
      <S.Wrapper>
          <input 
          type="text" 
          placeholder="Digite o nome do usuário para pesquisar.." 
          onChange={(event) => setusernameForSearch(event.target.value)}
          />

          <button type="submit" onClick={submitGetUser}>
            <span>Buscar</span>
          </button>
      </S.Wrapper>
  </header>
  );
};

export default Header;