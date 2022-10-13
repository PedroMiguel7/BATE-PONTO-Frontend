import { SidebarComponent } from "./sidebar.component";

describe('SidebarComponent', () => {
  it('it should return 1', () => {
    const sut = new SidebarComponent();
    expect(sut.fazLogout()).toBeUndefined();
  });
})