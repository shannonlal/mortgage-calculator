import './calculation-summary.module.scss';
import { withStyles, makeStyles } from "@material-ui/core/styles";

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  TableContainer,
  Paper,
  Typography,
  Grid
} from "@material-ui/core";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#284162",
    color: theme.palette.common.white,
    fontSize: 18
  },
  body: {
    fontSize: 16
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});

/* eslint-disable-next-line */
export interface CalculationSummaryProps {
  term: number;
  amortizationPeriodYear : number;
  mortgageAmountPerMonth: number;
  prepaymentAmount: number;
  termPrincipleAmount: number;
  mortgageAmount: number;
  termInterestAmount: number;
  totalInterestInPeriod: number;
  totalAmountInPeriod: number;
}

export const CalculationSummary = (props: CalculationSummaryProps) => {
  const classes = useStyles();
  return (
<>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
          Calculation Summary
        </Typography>
      </Grid>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Category</StyledTableCell>
              <StyledTableCell align="center">Term</StyledTableCell>
              <StyledTableCell align="right">
                Amortization Period
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Number of Payments
              </StyledTableCell>
              <StyledTableCell align="center">
                {props.term * 12}
              </StyledTableCell>
              <StyledTableCell align="right">
                {props.amortizationPeriodYear * 12}
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Mortgage Payment
              </StyledTableCell>
              <StyledTableCell align="center">
                {props.mortgageAmountPerMonth}
              </StyledTableCell>
              <StyledTableCell align="right">
                {props.mortgageAmountPerMonth}
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Prepayment
              </StyledTableCell>
              <StyledTableCell align="center">
                {props.prepaymentAmount}
              </StyledTableCell>
              <StyledTableCell align="right">
                {props.prepaymentAmount}
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Principal Payments
              </StyledTableCell>
              <StyledTableCell align="center">
                {props.termPrincipleAmount}
              </StyledTableCell>
              <StyledTableCell align="right">
                {props.mortgageAmount}
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Interest Payments
              </StyledTableCell>
              <StyledTableCell align="center">
                {props.termInterestAmount}
              </StyledTableCell>
              <StyledTableCell align="right">
                {props.totalInterestInPeriod}
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Total Cost
              </StyledTableCell>
              <StyledTableCell align="center" id="totalTermAmount">
                {(
                  Number(props.termInterestAmount) +
                  Number(props.termPrincipleAmount)
                ).toFixed(2)}
              </StyledTableCell>
              <StyledTableCell align="right" id="totalPeriodAmount">
                {props.totalAmountInPeriod}
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default CalculationSummary;
