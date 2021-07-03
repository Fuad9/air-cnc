import { NavLink } from "react-router-dom";
//styles
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useState } from "react";
import { Drawer } from "@material-ui/core";

import "./NavBar.scss";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		width: "min(90%, 70.5rem)",
		margin: "0 auto",
		borderBottom: "2px solid green",
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
		textDecoration: "none",
	},
};

export default function NavBar() {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const users = useSelector((state) => state.users);

	return (
		<div className={classes.root}>
			<AppBar
				position="static"
				style={{ backgroundColor: "transparent", boxShadow: "none" }}
			>
				<Toolbar className="d-flex justify-content-end">
					<div className="nav-menu d-flex align-items-center">
						<NavLink
							activeStyle={styles.textActiveStyle}
							style={styles.textStyle}
							to="/home"
						>
							<Typography variant="h6" className={classes.title}>
								Host your home
							</Typography>
						</NavLink>
						<NavLink
							activeStyle={styles.textActiveStyle}
							style={styles.textStyle}
							to="/home"
						>
							<Typography variant="h6" className={classes.title}>
								Host your experience
							</Typography>
						</NavLink>
						<NavLink
							activeStyle={styles.textActiveStyle}
							style={styles.textStyle}
							to="/home"
						>
							<Typography variant="h6" className={classes.title}>
								Help
							</Typography>
						</NavLink>

						{Object.keys(users).length === 0 ? (
							<NavLink
								activeStyle={styles.textActiveStyle}
								style={styles.textStyle}
								to="/auth"
							>
								<Typography variant="h6" className={classes.title}>
									<button style={{ borderRadius: "3rem" }}>Login</button>
								</Typography>
							</NavLink>
						) : (
							<Typography variant="h6" className={classes.title}>
								{users.displayName}
							</Typography>
						)}
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
									<MenuItem onClick={() => setOpen(false)}>
										Host your home
									</MenuItem>
								</NavLink>
								<NavLink
									activeStyle={styles.textActiveStyle}
									style={styles.textStyle}
									to="/home"
								>
									<MenuItem onClick={() => setOpen(false)}>
										Host your experience
									</MenuItem>
								</NavLink>
								<NavLink
									activeStyle={styles.textActiveStyle}
									style={styles.textStyle}
									to="/home"
								>
									<MenuItem onClick={() => setOpen(false)}>Help</MenuItem>
								</NavLink>

								{Object.keys(users).length === 0 ? (
									<NavLink
										activeStyle={styles.textActiveStyle}
										style={styles.textStyle}
										to="/auth"
									>
										<MenuItem onClick={() => setOpen(false)}>Login</MenuItem>
									</NavLink>
								) : (
									<Typography variant="h6" className={classes.title}>
										{users.displayName}
									</Typography>
								)}
							</div>
						</Drawer>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}
