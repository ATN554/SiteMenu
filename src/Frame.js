import React from "react";
import { ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default function Frame(props) {
  const {
    UID,
    title,
    subtitle,
    url,
    onClose
  } = props;

  return (
    <Card id={UID} key={UID}>
      <CardHeader
        action={
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
      <CardContent>
        <iframe
          title={title}
          src={url}
          width="100%"
          height="100%"
          loading="lazy"
          frameBorder="1"
        />
      </CardContent>
    </Card>
  );
}