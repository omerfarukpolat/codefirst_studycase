import React from 'react';

import { ArrowLeft, ReportProblem } from '@mui/icons-material';
import { Box, Button, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface ErrorStateProps {
  title: string;
  message?: string;
  isButtonVisible?: boolean;
}

const ErrorStateComponent: React.FC<ErrorStateProps> = ({
  title,
  message = "We're having trouble loading this content. Please try again.",
  isButtonVisible = true,
}) => {
  const navigate = useNavigate();

  return (
    <Box className="error-state-container">
      <Paper className="error-state-content">
        <ReportProblem className="error-icon" />
        <Typography variant="h4" className="error-title">
          {title}
        </Typography>
        <Typography variant="body1" className="error-message">
          {message}
        </Typography>
        {isButtonVisible && (
          <Button
            variant="contained"
            startIcon={<ArrowLeft />}
            onClick={() => navigate(-1)}
            className="go-back-button"
          >
            Go Back
          </Button>
        )}
      </Paper>
    </Box>
  );
};

export default ErrorStateComponent;
