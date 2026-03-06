import React, { useEffect, useMemo, useState } from "react";
import "./pruebatecnica.css";

const API_BASE =
  "https://prueba-tecnica-fxakc9fwg5c0c7f3.chilecentral-01.azurewebsites.net/api";

function PruebaTecnica() {
  const [step, setStep] = useState(1);

  const [nombre, setNombre] = useState("");
  const [clienteId, setClienteId] = useState(null);

  const [productos, setProductos] = useState([]);
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);

  const [nuevoProductoNombre, setNuevoProductoNombre] = useState("");
  const [nuevoProductoPrecio, setNuevoProductoPrecio] = useState("");

  const [misPedidos, setMisPedidos] = useState([]);

  const [loadingProductos, setLoadingProductos] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [loadingNuevoProducto, setLoadingNuevoProducto] = useState(false);
  const [loadingPedidos, setLoadingPedidos] = useState(false);

  const [error, setError] = useState("");
  const [mensajeExito, setMensajeExito] = useState("");
  const [ordenCreada, setOrdenCreada] = useState(null);

  const obtenerProductos = async () => {
    try {
      setLoadingProductos(true);
      setError("");

      const response = await fetch(`${API_BASE}/productos`);
      if (!response.ok) {
        throw new Error("No se pudieron obtener los productos.");
      }

      const data = await response.json();
      const lista = Array.isArray(data) ? data : data.data || [];
      setProductos(lista);
    } catch (err) {
      setError(err.message || "Error al cargar productos.");
    } finally {
      setLoadingProductos(false);
    }
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  const totalEstimado = useMemo(() => {
    return productosSeleccionados.reduce((acc, productoId) => {
      const producto = productos.find(
        (p) => p.id === productoId || p.Id === productoId
      );

      const precio =
        producto?.precioProducto ??
        producto?.PrecioProducto ??
        0;

      return acc + Number(precio);
    }, 0);
  }, [productosSeleccionados, productos]);

  const avanzarPaso1 = async () => {
    try {
      setError("");
      setMensajeExito("");

      const nombreLimpio = nombre.trim();

      if (!nombreLimpio) {
        setError("Debes ingresar tu nombre.");
        return;
      }

      const response = await fetch(`${API_BASE}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nombreLimpio,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "No se pudo crear el usuario.");
      }

      const idCreado = data?.Id ?? data?.id;
      setClienteId(idCreado);
      setMensajeExito(`Usuario listo con id ${idCreado}.`);
      setStep(2);
    } catch (err) {
      setError(err.message || "Error al crear el usuario.");
    }
  };

  const toggleProducto = (productoId) => {
    setProductosSeleccionados((prev) => [...prev, productoId]);
  };

  const eliminarProductoSeleccionado = (indexAEliminar) => {
    setProductosSeleccionados((prev) =>
      prev.filter((_, index) => index !== indexAEliminar)
    );
  };

  const crearNuevoProducto = async () => {
    try {
      setLoadingNuevoProducto(true);
      setError("");
      setMensajeExito("");

      const nombreLimpio = nuevoProductoNombre.trim();
      const precioNumero = Number(nuevoProductoPrecio);

      if (!nombreLimpio) {
        setError("Debes ingresar el nombre del producto.");
        return;
      }

      if (!nuevoProductoPrecio || Number.isNaN(precioNumero) || precioNumero <= 0) {
        setError("Debes ingresar un precio válido mayor a 0.");
        return;
      }

      const response = await fetch(`${API_BASE}/productos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombreProducto: nombreLimpio,
          precioProducto: precioNumero,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "No se pudo crear el producto.");
      }

      setNuevoProductoNombre("");
      setNuevoProductoPrecio("");
      setMensajeExito("Producto creado correctamente.");

      await obtenerProductos();
    } catch (err) {
      setError(err.message || "Error al crear el producto.");
    } finally {
      setLoadingNuevoProducto(false);
    }
  };

  const crearOrden = async () => {
    try {
      setLoadingSubmit(true);
      setError("");
      setMensajeExito("");
      setOrdenCreada(null);

      if (!clienteId) {
        setError("Primero debes crear el usuario.");
        return;
      }

      if (productosSeleccionados.length === 0) {
        setError("Debes seleccionar al menos un producto.");
        return;
      }

      const response = await fetch(`${API_BASE}/ordenes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clienteId,
          clienteNombre: nombre.trim(),
          productos: productosSeleccionados,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "No se pudo crear la orden.");
      }

      setOrdenCreada(data);
      setMensajeExito("Orden creada correctamente.");
      setStep(3);

      await verMisPedidos(clienteId);
    } catch (err) {
      setError(err.message || "Error al crear la orden.");
    } finally {
      setLoadingSubmit(false);
    }
  };

  const verMisPedidos = async (idCliente = clienteId) => {
    try {
      setLoadingPedidos(true);
      setError("");
      setMensajeExito("");

      if (!idCliente) {
        setError("Primero debes crear o cargar el usuario.");
        return;
      }

      const response = await fetch(`${API_BASE}/ordenes/cliente/${idCliente}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "No se pudieron obtener los pedidos.");
      }

      const lista = Array.isArray(data) ? data : data.data || [];
      setMisPedidos(lista);
    } catch (err) {
      setError(err.message || "Error al obtener los pedidos.");
    } finally {
      setLoadingPedidos(false);
    }
  };

  const reiniciar = () => {
    setStep(1);
    setNombre("");
    setClienteId(null);
    setProductosSeleccionados([]);
    setNuevoProductoNombre("");
    setNuevoProductoPrecio("");
    setMisPedidos([]);
    setError("");
    setMensajeExito("");
    setOrdenCreada(null);
  };

  return (
    <div className="prueba-tecnica-page">
      <div className="prueba-tecnica-container">
        <div className="prueba-tecnica-header">
          <span className="prueba-tecnica-badge">Demo API</span>
          <h1>Prueba técnica</h1>
          <p>Seleccionar usuario, elegir productos y generar orden.</p>
        </div>

        {(error || mensajeExito) && (
          <div className="prueba-tecnica-alerts">
            {error && (
              <div className="alert alert-error">
                <strong>Error:</strong> {error}
              </div>
            )}

            {mensajeExito && (
              <div className="alert alert-success">
                <strong>OK:</strong> {mensajeExito}
              </div>
            )}
          </div>
        )}

        <div className="step-indicator">
          <div className={`step-item ${step >= 1 ? "active" : ""}`}>1. Usuario</div>
          <div className={`step-item ${step >= 2 ? "active" : ""}`}>2. Productos</div>
          <div className={`step-item ${step >= 3 ? "active" : ""}`}>3. Orden</div>
        </div>

        {step === 1 && (
          <section className="card">
            <h2>Ingresa tu nombre</h2>
            <p className="section-text">
              Primero crearemos o reutilizaremos un usuario con tu nombre.
            </p>

            <div className="form-row">
              <input
                className="text-input"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Tu nombre"
              />

              <button className="primary-button" onClick={avanzarPaso1}>
                Continuar
              </button>
            </div>
          </section>
        )}

        {step === 2 && (
          <section className="card">
            <h2>Selecciona productos</h2>

            <div className="client-box">
              <span>
                <strong>Cliente:</strong> {nombre}
              </span>
              <span>
                <strong>ID:</strong> {clienteId}
              </span>
            </div>

            <div className="actions-row">
              <button
                className="secondary-button"
                onClick={() => verMisPedidos()}
                disabled={loadingPedidos}
              >
                {loadingPedidos ? "Cargando pedidos..." : "Ver mis pedidos"}
              </button>
            </div>

            {misPedidos.length > 0 && (
              <div className="orders-box">
                <h3>Pedidos del cliente</h3>

                <div className="product-list">
                  {misPedidos.map((orden) => {
                    const id = orden.id ?? orden.Id;
                    const total = orden.total ?? orden.Total;
                    const fecha = orden.fechaCreacion ?? orden.FechaCreacion;
                    const nombreCliente =
                      orden.clienteNombre ?? orden.ClienteNombre;

                    return (
                      <div key={id} className="product-card selected">
                        <div>
                          <p className="product-name">Orden #{id}</p>
                          <p className="product-price">Cliente: {nombreCliente}</p>
                          <p className="product-price">Total: ${total}</p>
                          <p className="product-price">
                            Fecha:{" "}
                            {fecha
                              ? new Date(fecha).toLocaleString()
                              : "Sin fecha"}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="new-product-box">
              <h3>Agregar nuevo producto</h3>

              <div className="form-row">
                <input
                  className="text-input"
                  type="text"
                  value={nuevoProductoNombre}
                  onChange={(e) => setNuevoProductoNombre(e.target.value)}
                  placeholder="Nombre del producto"
                />

                <input
                  className="text-input price-input"
                  type="number"
                  min="1"
                  step="0.01"
                  value={nuevoProductoPrecio}
                  onChange={(e) => setNuevoProductoPrecio(e.target.value)}
                  placeholder="Precio"
                />

                <button
                  className="primary-button"
                  onClick={crearNuevoProducto}
                  disabled={loadingNuevoProducto}
                >
                  {loadingNuevoProducto ? "Agregando..." : "Agregar producto"}
                </button>
              </div>
            </div>

            {loadingProductos ? (
              <p className="section-text">Cargando productos...</p>
            ) : (
              <div className="products-layout">
                <div className="products-column">
                  <h3>Productos disponibles</h3>

                  {productos.length === 0 ? (
                    <p className="empty-text">No hay productos cargados.</p>
                  ) : (
                    <div className="product-list">
                      {productos.map((producto) => {
                        const id = producto.id ?? producto.Id;
                        const nombreProducto =
                          producto.nombreProducto ?? producto.NombreProducto;
                        const precioProducto =
                          producto.precioProducto ?? producto.PrecioProducto;

                        return (
                          <div key={id} className="product-card">
                            <div>
                              <p className="product-name">{nombreProducto}</p>
                              <p className="product-price">${precioProducto}</p>
                            </div>

                            <button
                              className="secondary-button"
                              onClick={() => toggleProducto(id)}
                            >
                              Agregar al carrito
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                <div className="products-column">
                  <h3>Productos seleccionados</h3>

                  {productosSeleccionados.length === 0 ? (
                    <p className="empty-text">
                      No has agregado productos todavía.
                    </p>
                  ) : (
                    <div className="product-list">
                      {productosSeleccionados.map((productoId, index) => {
                        const producto = productos.find(
                          (p) => (p.id ?? p.Id) === productoId
                        );

                        const nombreProducto =
                          producto?.nombreProducto ??
                          producto?.NombreProducto ??
                          "Producto";

                        const precioProducto =
                          producto?.precioProducto ??
                          producto?.PrecioProducto ??
                          0;

                        return (
                          <div
                            key={`${productoId}-${index}`}
                            className="product-card selected"
                          >
                            <div>
                              <p className="product-name">{nombreProducto}</p>
                              <p className="product-price">${precioProducto}</p>
                            </div>

                            <button
                              className="danger-button"
                              onClick={() => eliminarProductoSeleccionado(index)}
                            >
                              Quitar
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="summary-box">
              <p>
                <strong>Total estimado:</strong> ${totalEstimado}
              </p>

              <button
                className="primary-button"
                onClick={crearOrden}
                disabled={loadingSubmit}
              >
                {loadingSubmit ? "Creando orden..." : "Comprar"}
              </button>
            </div>
          </section>
        )}

        {step === 3 && (
          <section className="card">
            <h2>Orden creada</h2>

            {ordenCreada && (
              <div className="result-box">
                <p>
                  <strong>Orden ID:</strong>{" "}
                  {ordenCreada.ordenId ?? ordenCreada.id}
                </p>
                <p>
                  <strong>Total:</strong> ${ordenCreada.total}
                </p>
              </div>
            )}

            <div className="actions-row">
              <button
                className="secondary-button"
                onClick={() => verMisPedidos()}
                disabled={loadingPedidos}
              >
                {loadingPedidos ? "Cargando pedidos..." : "Ver mis pedidos"}
              </button>

              <button className="primary-button" onClick={reiniciar}>
                Crear otra orden
              </button>
            </div>

            {misPedidos.length > 0 && (
              <div className="orders-box">
                <h3>Pedidos del cliente</h3>

                <div className="product-list">
                  {misPedidos.map((orden) => {
                    const id = orden.id ?? orden.Id;
                    const total = orden.total ?? orden.Total;
                    const fecha = orden.fechaCreacion ?? orden.FechaCreacion;
                    const nombreCliente =
                      orden.clienteNombre ?? orden.ClienteNombre;

                    return (
                      <div key={id} className="product-card selected">
                        <div>
                          <p className="product-name">Orden #{id}</p>
                          <p className="product-price">Cliente: {nombreCliente}</p>
                          <p className="product-price">Total: ${total}</p>
                          <p className="product-price">
                            Fecha:{" "}
                            {fecha
                              ? new Date(fecha).toLocaleString()
                              : "Sin fecha"}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
}

export default PruebaTecnica;