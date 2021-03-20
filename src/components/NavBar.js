import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useState } from "react";
import { Drawer } from "@material-ui/core";
import { NavLink } from "react-router-dom";

import "./NavBar.scss";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		marginRight: theme.spacing(3),
	},
}));

const styles = {
	textActiveStyle: {
		color: "#2BDE8C",
		textDecoration: "none",
	},
	textStyle: {
		color: "#000",
		textDecoration: "none",
	},
};

export default function NavBar() {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	return (
		<div className={classes.root}>
			<AppBar position="static" style={{ backgroundColor: "#fff" }}>
				<Toolbar className="d-flex justify-content-end">
					<div className="nav-menu d-flex align-items-center">
						<NavLink activeStyle={styles.textActiveStyle} style={styles.textStyle} to="/home">
							<Typography variant="h6" className={classes.title}>
								Host your home
							</Typography>
						</NavLink>
						<NavLink activeStyle={styles.textActiveStyle} style={styles.textStyle} to="apps">
							<Typography variant="h6" className={classes.title}>
								Host your experience
							</Typography>
						</NavLink>
						<NavLink
							activeStyle={styles.textActiveStyle}
							style={styles.textStyle}
							to="advertise"
						>
							<Typography variant="h6" className={classes.title}>
								Help
							</Typography>
						</NavLink>
						<NavLink
							activeStyle={styles.textActiveStyle}
							style={styles.textStyle}
							to="/about"
						>
							<Typography variant="h6" className={classes.title}>
								Log in
							</Typography>
						</NavLink>
						<NavLink activeStyle={styles.textActiveStyle} style={styles.textStyle} to="/jobs">
							<Typography variant="h6" className={classes.title}>
								<button style={{ borderRadius: "3rem" }}>Sign up</button>
							</Typography>
						</NavLink>
					</div>

					<div className="menu-icon">
						<IconButton
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={() => setOpen(true)}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>

						<Drawer
							id="menu-appbar"
							anchor="right"
							open={open}
							onClose={() => setOpen(false)}
						>
							<div className="menu-appbar">
								<NavLink
									activeStyle={styles.textActiveStyle}
									style={styles.textStyle}
									to="/home"
								>
									<MenuItem onClick={() => setOpen(false)}>Home</MenuItem>
								</NavLink>
								<NavLink
									activeStyle={styles.textActiveStyle}
									style={styles.textStyle}
									to="/apps"
								>
									<MenuItem onClick={() => setOpen(false)}>Our Apps</MenuItem>
								</NavLink>
								<NavLink
									activeStyle={styles.textActiveStyle}
									style={styles.textStyle}
									to="/advertise"
								>
									<MenuItem onClick={() => setOpen(false)}>Advertise with us</MenuItem>
								</NavLink>
								<NavLink
									activeStyle={styles.textActiveStyle}
									style={styles.textStyle}
									to="/about"
								>
									<MenuItem onClick={() => setOpen(false)}>About us</MenuItem>
								</NavLink>
								<NavLink
									activeStyle={styles.textActiveStyle}
									style={styles.textStyle}
									to="/jobs"
								>
									<MenuItem onClick={() => setOpen(false)}>Jobs</MenuItem>
								</NavLink>
								<NavLink
									activeStyle={styles.textActiveStyle}
									style={styles.textStyle}
									to="/helps"
								>
									<MenuItem onClick={() => setOpen(false)}>Help & faq</MenuItem>
								</NavLink>
							</div>
						</Drawer>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}
