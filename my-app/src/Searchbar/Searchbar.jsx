import { useState } from "react";
import { toast } from "react-toastify";
import s from "./Searchbar.module.css";
export default function Searchbar({ onSubmit }) {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.currentTarget.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      toast("start search");
      return;
    }
    onSubmit(value);
    setValue("");
  };
  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchFormbutton}>
          <span className={s.SearchFormbuttonlabel}>Search</span>
        </button>

        <input
          onChange={handleChange}
          className={s.SearchForminput}
          value={value}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

// export default class oldSearchbar extends Component {
//   state = {
//     value: "",
//   };
//   handleChange = (e) => {
//     this.setState({ value: e.currentTarget.value.toLowerCase() });
//   };
//   handleSubmit = (e) => {
//     e.preventDefault();
//     if (this.state.value.trim() === "") {
//       toast("start search");
//       return;
//     }
//     this.props.onSubmit(this.state.value);
//     this.setState({ value: "" });
//   };
//   render() {
//     return (
//       <header className={s.Searchbar}>
//         <form className={s.SearchForm} onSubmit={this.handleSubmit}>
//           <button type="submit" className={s.SearchFormbutton}>
//             <span className={s.SearchFormbuttonlabel}>Search</span>
//           </button>

//           <input
//             onChange={this.handleChange}
//             className={s.SearchForminput}
//             value={this.state.value}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//           />
//         </form>
//       </header>
//     );
//   }
// }
