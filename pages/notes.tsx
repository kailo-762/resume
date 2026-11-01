import { OwnAppBar } from "../components/AppBar/appbar";
import { SearchBarElement } from "../components/AppBar/searchBarElement";
import { Notes as NotesComponent } from "../sections/Notes/notes";

const Notes = () => {
  // --- RENDER ---

  return (
    <>
      <OwnAppBar link="/" linkText="Home">
        {/* <SearchBarElement /> */}
      </OwnAppBar>

      <div className="app">
        <NotesComponent />
      </div>
    </>
  );
};

export default Notes;
