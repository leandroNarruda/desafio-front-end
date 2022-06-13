import { StyledIndex } from "./style"
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { useProducts } from "../../providers/Products"
import { ProductProps } from "../../types"
import { useHistory } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { notifyError, notifyGenericSuccess } from "../../services/notifyData"
import swal from 'sweetalert';
import api from "../../services/api"

const HomePage = () => {

  const { productList, setProduct, setProductList } = useProducts()

  const history = useHistory()

  const setProducttoUpdate = (product: ProductProps) => {
    setProduct(product)
    history.push("/formulario-de-cadastro")
  }

  const handleClickDelete =(id:number) => {
    swal({
      title: "Quer mesmo deletar?",
      icon: "warning",
      dangerMode: true,
      buttons:  ['Não','Sim'],
    })
    .then((willDelete) => {
      if (willDelete) {
        api
        .delete(`products/${id}/`)
        .then(res=>{
          setProductList(res.data)
          history.push("")
          setTimeout(() => {
            notifyGenericSuccess("Produto excluído com sucesso!")
          }, 100);
        })
        .catch((error=>{
          console.log(error)
          notifyError("Algo deu errado!")
        }))
      }
    });
  }

  return (
    <StyledIndex>
      <ToastContainer style={{ width: "auto", minWidth: "250px", textAlign: "center" }} />
      <button className="st-btn-header" onClick={()=>history.push('formulario-de-cadastro')}>Cadastrar novo</button>
      <div>
        <table>
          <thead>
            <tr className="st-tr">
              <th>Nome do Produto</th>
              <th>Valor do Produto</th>
              <th>Código do Produto</th>
              <th>Categoria do Produto</th>
              <th>Nome do Fornecedor</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product, index)=>(
              <tr className="st-tr" key={index}>
                <td>{product.name}</td>
                <td>{product.amount}</td>
                <td>{product.code}</td>
                <td>{product.category}</td>
                <td>{product.provider}</td>
                <td>
                  <AiFillEdit className="st-icons" onClick={()=>setProducttoUpdate(product)} />
                  <AiFillDelete className="st-icons" onClick={()=>handleClickDelete(product.id)}  />
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>

          </tfoot>
        </table>
      </div>


    </StyledIndex>
  )
}

export default HomePage