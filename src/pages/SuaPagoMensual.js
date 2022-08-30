import React, { useEffect, useState, useRef } from "react";
import ReactToPrint from "react-to-print";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import TopBar from "../components/TopBar";
import TablePagoMensualSua from "../components/TablePagoMensualSua";

const SuaPagoMensual = () => {
  const tableRef = useRef(); // Reference to the report's table
  const axiosPrivate = useAxiosPrivate(); // Uses axios with auth credentials

  const [info, setInfo] = useState({}); // Information retrieved from the API
  const [loading, setLoading] = useState(true); // Conditional to display a message while loading
  const [filter, setFilter] = useState(""); // Value in which to filter the report's data

  useEffect(() => {
    // Fetches specific data from the API and updates state
    const fetchData = async () => {
      const ANO = 2022;
      const MES = "04";
      const REGPATRON = "E6030587100";
      try {
        const res = await axiosPrivate.get("/api/sua/mensual", {
          params: { ANO, MES, REGPATRON },
        });
        setInfo(res.data);
        setLoading(false);
      } catch (err) {
        alert("Existe un problema al leer el pago mensual");
        console.error(err);
      }
    };

    fetchData();
  }, []);

  // Button information to pass to the TopBar component
  const topBarBtns = [
    {
      name: "Leer Disco",
      to: "/sua",
    },
    {
      name: "Resumen",
      to: "/sua/resumen",
    },
    {
      name: "Pago Mensual",
      to: "/sua/mensual",
    },
    {
      name: "Pago Bimestral",
      to: "/sua/bimestral",
    },
  ];

  // Changes in the filter value handler
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      {/* TopBar */}
      <TopBar btns={topBarBtns} />

      {/* Print PDF button (needs ref) */}
      <ReactToPrint
        trigger={() => <button className="print-btn">Imprimir PDF</button>}
        pageStyle="@page { size: auto; margin: 5mm;  } @media print { body { -webkit-print-color-adjust: exact; padding: 20px !important; } }"
        content={() => tableRef.current}
      />

      {/* Filter Text Field */}
      <div className="filter">
        <input
          type="text"
          placeholder="Filtrar..."
          className="input input-bordered w-full max-w-xs"
          onChange={handleFilterChange}
        />
      </div>

      {/* Main content (report) */}
      <div className="content">
        {loading ? (
          <h1 className="text-center">Cargando...</h1> // Displays message if information is not yet available
        ) : (
          <TablePagoMensualSua info={info} filter={filter} ref={tableRef} />
        )}
      </div>
    </div>
  );
};

export default SuaPagoMensual;
