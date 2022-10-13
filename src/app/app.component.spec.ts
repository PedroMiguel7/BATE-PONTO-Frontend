import { AppComponent } from "./app.component";

describe('App Component', () =>{
  let fixture: AppComponent;

  beforeEach(() => {
    fixture = new AppComponent();
  })

  it('should have a title migule-points', () => {
    expect(fixture.title).toEqual('migule-points');
  })
})