import { StyledIndex } from "./style";
import { Formik, Form } from 'formik';
import { StyledErrorMessage, StyledField } from "./style";
import api from "../../services/api";
import { notifyError, notifyGenericSuccess } from "../../services/notifyData";
import { useHistory } from "react-router-dom";
import { useProducts } from "../../providers/Products";
import { ToastContainer } from "react-toastify";
import { errorsProps } from "../../types";

const FormPage = () => {

  const history = useHistory()

  const { product, setProductList, setProduct } = useProducts()

  const initialValues = {
    name: product?.name,
    amount: product?.amount,
    code: product?.code,
    category: product?.category,
    provider: product?.provider
  }

  const handleInputChange = (e:any) => {
    let num = e.target.value.toString().replace(".","")
    if(num.length > 2)
      e.target.value = parseFloat(num.slice(0,num.length-2)+"."+num.slice(-2))
  }

  const handleClickCancel = () => {
    history.push("")
    setProduct(false)
  }

  return (
    <StyledIndex>
      <ToastContainer style={{ width: "auto", minWidth: "250px", textAlign: "center" }} />
      <div className="st-register-form">
        <Formik
          initialValues={initialValues}
          validate={values => {
            const errors: errorsProps = {
              name: "",
              amount: "",
              code: "",
              category: "",
              provider: ""
            };
            if(!values.name) {
              errors.name = 'Campo Obrigatório!';
              return errors;
            }
            if (!values.amount) {
              errors.amount = 'Campo Obrigatório!';
              return errors;
            }
            if (!values.code) {
              errors.code = 'Campo Obrigatório!';
              return errors;
            }
            if (!values.category) {
              errors.category = 'Campo Obrigatório!';
              return errors;
            }
            if (!values.provider) {
              errors.provider = 'Campo Obrigatório!';
              return errors;
            }

          }}
          onSubmit={(values) => {
              if(product)
              api
              .put(`products/${product.id}/`, values)
              .then(res=>{
                setProductList(res.data)
                history.push("")
                setTimeout(() => {
                  notifyGenericSuccess("Produto alterado com sucesso!")
                }, 100);
              })
              .catch((error=>{
                console.log(error)
                notifyError("Algo deu errado!")
              }))
              else
              api
              .post("products/0/", values)
              .then(res=>{
                setProductList(res.data)
                history.push("")
                setTimeout(() => {
                  notifyGenericSuccess("Produto cadastrado com sucesso!")
                }, 100);
              })
              .catch((error=>{
                console.log(error)
                notifyError("Algo deu errado!")
              }))
          }}
        >
        {({
            // isSubmitting,
            errors
        }) => (
          <Form>
              <StyledField error={errors} type="text" name="name" placeholder="Nome do Produto" maxLength="100" />
              <StyledErrorMessage name="name" component="div" />

              <StyledField
                type="number" step="0.01" name="amount" error={errors}
                placeholder="Valor do Produto (R$)" min="0" onInput={(e:any)=>handleInputChange(e)}
              />
              <StyledErrorMessage name="amount" component="div" />

              <StyledField error={errors} type="text" name="code" placeholder="Código do Produto" maxLength="100" />
              <StyledErrorMessage name="code" component="div" />

              <StyledField error={errors} type="text" name="category" placeholder="Categoria do Produto" maxLength="100" />
              <StyledErrorMessage name="category" component="div" />

              <StyledField error={errors} type="text" name="provider" placeholder="Nome do Fornecedor" maxLength="100" />
              <StyledErrorMessage name="provider" component="div" />

              <button className="st-submit-button" type="submit" >
                {product ? "Alterar Produto" : "Cadastrar Produto" }
              </button>
              <button className="st-cancel-button" type="button" onClick={handleClickCancel} >
                Voltar
              </button>

            </Form>
            )}
        </Formik>
      </div>
    </StyledIndex>
  )
}

export default FormPage