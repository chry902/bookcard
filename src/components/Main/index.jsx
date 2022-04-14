import '../../App.css';
export const BookCard = ({ name, description, img }) => {
    return <div className="card_contain">
        <div className="card">

            <div className="contain_img">
                <img src={img} alt="" />
            </div>

            <div className="contain_title">
                <h3>{name}</h3>
                <p>{description}</p>
                <button type="button" class="btn-toolset">Bottone</button>
            </div>

        </div>
    </div>
};
