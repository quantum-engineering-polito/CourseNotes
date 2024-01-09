---
nextnote: 
author: 
authorlink:
---

## Contacts
Source, Drain and substrate (*Body/Bulk*) are ohmic contacts and at equilibrium (no voltage applied and thermal equilibrium) the Fermi energy is uniquely defined:
$$ 
E_{f_{n}}=E_{f_{p}}=E_{f}
$$
When an external voltage ($V_{C}$) is applied to said contacts, the Fermi energy is fixed at the external potential (this means that the voltage applied "sets" the level)
The Fermi energy at thermal equilibrium is set in all the semiconductor connected to the metal contact (source, drain or substrate).
$$
E_{f}= -qV_{C} 
$$
Instead if the voltage is applied **between** two ohmic contacts, the two Fermi energy are shifted one from each other proportionally to the voltage applied:
$$
E_{f_{1}}-E_{f_{2}}=qV
$$
where contact **1** has the lower voltage.
For example if a voltage is applied between *source* and *drain*, with $V_{DS}>0$  the difference in Fermi energies is given by:
$$ 
E_{f_{S}}-E_{f_{D}}=qV_{DS}
$$ 
Any potential energy of the electrons can be derived from a unique potential as all levels are parallel. 
The electrostatic potential is associated with the intrinsic Fermi level of the substrate where the semiconductor is neutral ($x=\infty$, far from the interface.)
$$ 
E_{f_{i}}(x=\infty,y)=E_{f}(x=\infty)+q\phi_{p}=-qV_{Bulk}+q\phi_{p}
$$
(in a n-MOS *p-doped* $\phi_{p}>0$, in *n-doped* substrate $\phi_{n}<0$ )

In general:
$$
E_{f_{i}}(x,y)=-q\varphi(x,y)-qV_{Bulk}+q\phi_{p}
$$ 
and in the **bulk reference system** where $V_{Bulk}=0$
$$ 
E_{f_{i}}(x,y)=-q\psi(x,y)+q\phi_{p}
$$

## Channel potential
Is defined as:
$$ 
E_{f_{n}}(x,y)=-q\varphi(x,y)+E_{f}(x=\infty)
$$

so it is the Fermi energy of the substrate minus the channel electrostatic potential by the charge (electrons, with holes there are sign changes)
NOTICE: this is not a potential, is an **energy**!
Being the current along the x axis negligible it is assumed that the channel potential does not depend on x
$$ 
E_{f_{n}}(x,y)=-q\varphi_{ch}(y)-qV_{Bulk}
$$
and if $V_{Bulk}=0$ 
$$ 
E_{f_{n}}(y)=-q\varphi_{ch}(y)
$$
### Channel potential: the meaning

The channel potential does not represent the voltage drop between source and drain, but describes the behaviour of the electron quasi-Fermi energy 

Only if the current is mainly drift (no diffusion), the electrostatic potential is parallel to the channel potential
$$ 
\begin{align}
J_{n}&=qn\mu_{n}\mathcal{E}+qD_{n} \frac{\partial{n}}{\partial{x}}\\ \\
&=-qn\mu_{n}\frac{\partial{\varphi_{ch}}}{\partial{x}}
\end{align}
$$
## Electron concentration

Starting from the Shockley equation

$$ 
n=n_{i}\exp\left( \frac{E_{f_{n}}-E_{f_{i}}}{k_{B}T} \right)=n_{i}\exp\left( \frac{-\varphi_{ch}(y)+\varphi-\phi_{p}}{V_{T}} \right)

$$
and in a p-semiconductor (nMOS) the $q\phi_{p}$ is given by:
$$ 
q\phi_{p}=k_{B}T\log\left( \frac{N_{A}}{n_{i}} \right) \implies e^{-\phi_{p}/V_{T}}=\frac{n_{i}}{N_{A}}
$$ 
so the Shockley equation becomes:
$$
n=\frac{n_{i}^{2}}{N_{A}}\exp\left( \frac{-\varphi_{ch}+\varphi(x,y)}{V_{T}} \right)=n_{0}\exp\left( \frac{-\varphi_{ch}+\varphi(x,y)}{V_{T}} \right)
$$

where $n_{0}$ is the electron charge in a stand-alone p-doped sample with $N_{A}$ doping.

## Hole concentration

Again from the Shockley equation:
$$ 
p=n_{i}\exp(\frac{E_{f_{i}}-E_{f_{p}}}{V_{T}})=N_{A}\exp(\frac{-\varphi-E_{f_{p}}}{V_{T}})
$$

we can notice that the exponential is negative with respect to the potential, on the contrary in the electron concentration was positive.
We make the strong approximation that the hole current is negligible overall, this means that we make the approximation of $E_{f_{p}}$ constant and equal to $E_{f}(x=\infty)=0$ (bulk referred models)
The hole concentration is now:
$$ 
p(x,y)=N_{A}\exp\left(-\frac{\varphi(x,y)}{V_{T}}\right)=p_{0}\exp\left(-\frac{\varphi(x,y)}{V_{T}}\right)
$$ 
where $p_{0}$ is the hole charge in a stand-alone p-doped sample with $N_{A}$ doping

While a stand-alone p-type semiconductor is neutral, in the MOS system the charge density is not 0.
$$ 
\rho=q[(p-p_{0})-(n-n_{0})]\neq 0
$$
and substituting the previous expressions for the hole and electron concentration we obtain:
$$ 
\rho=q\left[ N_{A}\left( \exp\left( -\frac{\varphi(x,y)}{V_{T}} \right)-1\right)-\frac{n_{i}^{2}}{N_{A}}\left( \exp\left( \frac{-\varphi_{ch}(y)+\varphi(x,y)}{V_{T}} \right)-1 \right) \right]\neq 0
$$
In static conditions Gauss law can be converted into the Poisson 
equation:
$$ 
-\frac{\rho}{\epsilon}=\frac{ \partial^{2} \varphi }{ \partial x^{2} } +\frac{ \partial^{2} \varphi }{ \partial y^{2} } 
$$

that can be simplified with the gradual channel hypothesis (GCA), so named because we assume that the voltages vary gradually along the channel from drain to source but at the same time they vary quickly perpendicularly to the channel moving from gate to the bulk.
with this model we assume that we can separate the problem in two simple one-dimensional problems.
$$ 
\left| \frac{ \partial^{2} \varphi }{ \partial y^{2} } \right|=\left| -\frac{ \partial\mathcal{E_{y}} }{ \partial y } \right|\ll\left| \frac{ \partial^{2} \varphi }{ \partial x^{2} } \right|=\left| -\frac{ \partial\mathcal{E_{x}} }{ \partial x } \right|
$$
with the boundary conditions:
$$ 
\varphi(x\to\infty,y)=0;\qquad \mathcal{E_{x}}(x\to\infty,y)-\frac{ \partial \varphi }{ \partial x }\Bigg|_{x\to \infty} = 0
$$
as $x\to\infty$ means on the bulk contact, where the semiconductor is neutral
With GCA the Poisson equation becomes one-dimensional and with some calculations the solution for the electric field is found
$$ 
\displaylines{
\mathcal{E}_{x}(x,y)=\mp\sqrt{\frac{2qN_{A}V_{T}}{\epsilon_{s}}}\Bigg\{e^{-\varphi(x,y)/V_{T}}+\frac{\varphi(x,y)}{V_{T}}-1+ \\
+\frac{n_{i}^2}{N_{A}^2}\left[e^{-\varphi_{ch}(y)/V_{T}}\left(e^{\varphi(x,y)/V_{T}}-1\right)-\frac{\varphi(x,y)}{V_{T}}\right]\Bigg\}^{1/2}
}
$$
The electrostatic potential cannot be found by integrating the electric field
The sign holds fo the working condition, "-" for accumulation and "+" for depletion or invertion
Defining the surface potential as:  $V_{S}=\varphi(x=0,y)$ we find the electric field at the surface:
$$ 
\displaylines{
\mathcal{E}_{S}=\mp\sqrt{\frac{2qN_{A}V_{T}}{\epsilon_{s}}}\Bigg\{e^{-V_{S}/V_{T}}+\frac{V_{S}}{V_{T}}-1+ \\
+\frac{n_{i}^2}{N_{A}^2}\left[e^{-\varphi_{ch}(y)/V_{T}}\left(e^{V_{S}/V_{T}}-1\right)-\frac{V_{S}}{V_{T}}\right]\Bigg\}^{1/2}
}
$$
and it is possible to determine the total semiconductor charge per unit area, by means of the Gauss law $Q_{S}=-\epsilon_{S}\mathcal{E}_{S}$
$$ 
 
 
\displaylines{
Q_{S}(y)=\mp\sqrt{2qN_{A}V_{T}\epsilon_{s}}\Bigg\{e^{-V_{S}/V_{T}}+\frac{V_{S}}{V_{T}}-1+ \\
+\frac{n_{i}^2}{N_{A}^2}\left[e^{-\varphi_{ch}(y)/V_{T}}\left(e^{V_{S}/V_{T}}-1\right)-\frac{V_{S}}{V_{T}}\right]\Bigg\}^{1/2}
}
$$ 
## Charges 
The total charge per unit area is defined as:
$$ 
Q_{S}(y)=-q\int_{0}^{+\infty} \rho(x,y) \, dx 
$$
The electron charge per unit area is similar, but only the electron concentration is integrated:
$$ 
Q_{n}(y)=-q\int_{0}^{+\infty} n(x,y) \, dx 
$$
and the same goes for the depletion charge
$$ 
Q_{d}(y)=-q\int_{0}^{+\infty} \rho(x,y)-N_{A}(x,y) \, dx \simeq -qN_{A}x_{d} 
$$
with $x_{d} \to V_{S}(y)=\frac{1}{2}\frac{N_{A}}{\epsilon_{S}}[x_{d}(y)]^2$  that is the depletion depth.

The MOS charge for $\varphi_{ch}=0$ changes with respect to the voltage, in the figure is possible to see the charge at the surface for the four operating conditions
	#todo add image with the four op. cond


  
