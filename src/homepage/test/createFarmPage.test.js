import '@testing-library/jest-dom';
import createFarmPage from "../creatFarmPage";
import {render,screen,cleanup,fireEvent} from'@testing-library/react';
import {userEvent} from'@testing-library/user-event';
describe('CreateFarmPage',()=>{ it('should render the same text in to title prop',async() => {
      render(<CreateFarmPage/>);
     // const inputElement=screen.getByPlaceholderText(/enter phone Number/i)
     // const ButtonElemnt=screen.getAllByRole('button',{name:/continue/i});
     // fireEvent.change(inputElement,{target:{value: '0930961202'}})
     // fireEvent.click(ButtonElement)
     // const divElement=screen.getByText(/0930961202/i)
     // expect(divElement).toBeInTheDocument()
});
})