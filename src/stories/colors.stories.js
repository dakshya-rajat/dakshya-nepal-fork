import React from "react"
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  Text,
  Avatar,
  Box,
} from "grommet"

export default {
  title: "Design/Colors",
}

export const Colors = () => {
  return (
    <Box direction="row" gap="large">
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell />
            <TableCell>Color Name</TableCell>
            <TableCell>Color Class</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <Avatar background={{ color: "p1" }} />
            </TableCell>
            <TableCell>Primary/P1</TableCell>
            <TableCell>
              <code>p1</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Avatar background={{ color: "p1-l" }} />
            </TableCell>
            <TableCell>Primary/P1 - L</TableCell>
            <TableCell>
              <code>p1-l</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Avatar background="h1" />
            </TableCell>
            <TableCell>Primary/H1</TableCell>
            <TableCell>
              <code>h1</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Avatar background="b1" />
            </TableCell>
            <TableCell>Grayscale/B1</TableCell>
            <TableCell>
              <code>b1</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Avatar background="b2" />
            </TableCell>
            <TableCell>Grayscale/B2</TableCell>
            <TableCell>
              <code>b2</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Avatar background="g1" />
            </TableCell>
            <TableCell>Grayscale/G1</TableCell>
            <TableCell>
              <code>g1</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Avatar background="w2" />
            </TableCell>
            <TableCell>Grayscale/W2</TableCell>
            <TableCell>
              <code>p1</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Avatar background="w1" />
            </TableCell>
            <TableCell>Grayscale/W1</TableCell>
            <TableCell>
              <code>w1</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Avatar background="s1" />
            </TableCell>
            <TableCell>State/S1</TableCell>
            <TableCell>
              <code>s1</code>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell />
            <TableCell>Color Name</TableCell>
            <TableCell>Color Class</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <Avatar background="s1" />
            </TableCell>
            <TableCell>State/S1</TableCell>
            <TableCell>
              <code>s1</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Avatar background="s1-l" />
            </TableCell>
            <TableCell>State/S1 - L</TableCell>
            <TableCell>
              <code>s1-l</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Avatar background="s2" />
            </TableCell>
            <TableCell>State/S2</TableCell>
            <TableCell>
              <code>s2</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Avatar background="s2-l" />
            </TableCell>
            <TableCell>State/S2 - L</TableCell>
            <TableCell>
              <code>s2-l</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Avatar background="s3" />
            </TableCell>
            <TableCell>State/S3</TableCell>
            <TableCell>
              <code>s3</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Avatar background="s3-l" />
            </TableCell>
            <TableCell>State/S3 - L</TableCell>
            <TableCell>
              <code>s3-l</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Avatar background="s4" />
            </TableCell>
            <TableCell>State/S4</TableCell>
            <TableCell>
              <code>s4</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Avatar background="s4-l" />
            </TableCell>
            <TableCell>State/S4 -L</TableCell>
            <TableCell>
              <code>s4-l</code>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  )
}
