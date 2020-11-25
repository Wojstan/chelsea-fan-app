import React from "react";
import { SeatFree, SeatReserved, SeatRow } from "../styled/StyledTickets";

export default function StadiumArena({
  arena,
  selected,
  setSelected,
  setShowPayment,
}) {
  const modifySelected = (name, id) => {
    setShowPayment(false);
    if (
      selected.some((type) => type.name === name && type.id === id) === true
    ) {
      setSelected(
        selected.filter((seat) => seat.name !== name || seat.id !== id)
      );
    } else {
      setSelected([...selected, { id: id, name: name }]);
    }
  };

  return (
    <div>
      {arena.map((row) => (
        <SeatRow key={row.id} vertical="center">
          {row.seats.map((seat) => (
            <div key={seat.id}>
              {seat.status === 0 && (
                <SeatFree
                  onClick={() => modifySelected(row.name, seat.id)}
                  style={{
                    backgroundColor:
                      selected.some(
                        (type) => type.name === row.name && type.id === seat.id
                      ) === true
                        ? "#001489"
                        : "white",
                  }}
                >
                  {row.name}
                  {seat.id}
                </SeatFree>
              )}
              {seat.status === 1 && (
                <SeatReserved>
                  {row.name}
                  {seat.id}
                </SeatReserved>
              )}
            </div>
          ))}
        </SeatRow>
      ))}
    </div>
  );
}
