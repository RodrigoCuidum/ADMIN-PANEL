import "./featured.scss"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined"

const Featured = () => {
  return (
    <div className="featured">
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertIcon fontSize="small" />
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={31} text={"31%"} strokeWidth={4} />
            </div>
            <p className="title">Total sales made today</p>
            <p className="amount">420€</p>
            <p className="desc">
                Previous transactions processing. Last payments may not be included.
            </p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult negative">
                    <KeyboardArrowDownIcon fontSize="small" />
                        <div className="resultAmount">1.2k €</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemResult positive">
                    <KeyboardArrowUpOutlinedIcon fontSize="small" />
                        <div className="resultAmount">2.4k €</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Year</div>
                    <div className="itemResult positive">
                    <KeyboardArrowUpOutlinedIcon fontSize="small" />
                        <div className="resultAmount">12.4k €</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured